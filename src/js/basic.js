
export default function getSpecial(p) {
  const res = [];
  const { special } = p;
  if (Array.isArray(special)) {
    for (let i = 0; i < special.length; i += 1) {
      const {
        id, name, icon, description = 'Описание не указано',
      } = special[i];
      res.push({
        id,
        name,
        icon,
        description,
      });
    }
    return res;
  }
  const {
    id, name, icon, description = 'Описание не указано',
  } = special;
  res.push({
    id,
    name,
    icon,
    description,
  });
  return res;
}
