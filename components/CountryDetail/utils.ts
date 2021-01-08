export default function getArrayValues(arr: any) {
  const value = arr?.map((item: { name: string }, index: number) => {
    if (arr.length > 1 && index !== arr.length - 1) {
      return ` ${item.name}, `;
    }
    return ` ${item.name}`;
  });
  return [...value];
}
