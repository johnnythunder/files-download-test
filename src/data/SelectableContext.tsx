import { PropsWithChildren, createContext, useContext, useState, useCallback } from 'react';

export type SelectionId = string | number;

export type Selection = SelectionId[];

type ProviderProps = PropsWithChildren<{
  defaultSelected?: Selection;
}>;

type TSelectableContext = {
  selected: Selection;
  setSelected: (selected: Selection) => void;
};

const EMPTY_SELECTION: Selection = [];

const SelectableContext = createContext<TSelectableContext>({
  selected: EMPTY_SELECTION,
  setSelected: () => {},
});

export const SelectableProvider = ({ defaultSelected = EMPTY_SELECTION, children }: ProviderProps) => {
  const [selected, setSelected] = useState(defaultSelected);

  return <SelectableContext.Provider value={{ selected, setSelected }}>{children}</SelectableContext.Provider>;
};

export const useSelectable = () => useContext(SelectableContext);

export const useIsSelected = (id: SelectionId) => {
  const { selected } = useSelectable();

  return selected.includes(id);
};

export const useAddToSelection = () => {
  const { selected, setSelected } = useSelectable();

  return useCallback((id: SelectionId) => setSelected([...selected, id]), [selected, setSelected]);
};

export const useRemoveFromSelection = () => {
  const { selected, setSelected } = useSelectable();

  return useCallback(
    (id: SelectionId) => setSelected(selected.filter((current) => current !== id)),
    [selected, setSelected]
  );
};
