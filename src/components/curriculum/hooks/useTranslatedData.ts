import { useMemo, Dispatch, SetStateAction } from "react";
import { useIntl } from "react-intl";
import { usePersistentState } from "./usePersistentState";

interface TranslatableField {
  idKey: string;
  valueKey: string;
  editedKey: string;
}

type DataItem = Record<string, unknown>;

function translateField(
  item: DataItem,
  field: TranslatableField,
  formatMessage: (descriptor: { id: string }) => string
): string {
  const edited = item[field.editedKey] as boolean;
  const id = item[field.idKey] as string;
  const value = item[field.valueKey] as string;

  if (edited) return value;
  if (id !== undefined && id !== "") return formatMessage({ id });
  return value ?? "";
}

export function useTranslatedData<T extends object, R extends T = T>(
  initialData: T[],
  fields: TranslatableField[],
  customTransform?: (item: T, formatMessage: (descriptor: { id: string }) => string) => Partial<R>,
  /** localStorage key (without prefix) to persist edits; null = ephemeral. */
  persistKey: string | null = null
): [R[], Dispatch<SetStateAction<T[]>>] {
  const intl = useIntl();
  const [data, setData] = usePersistentState<T[]>(persistKey, initialData);

  const translated = useMemo(() => {
    return data.map((item) => {
      const record = item as DataItem;
      const translatedFields: Record<string, string> = {};
      for (const field of fields) {
        if (field.idKey in record || field.editedKey in record) {
          translatedFields[field.valueKey] = translateField(record, field, intl.formatMessage);
        }
      }
      const custom = customTransform ? customTransform(item, intl.formatMessage) : {};
      return { ...item, ...translatedFields, ...custom } as R;
    });
  }, [data, intl, fields, customTransform]);

  return [translated, setData];
}
