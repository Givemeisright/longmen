let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
  id++;
//   或者使用id.toString()
  window.localStorage.setItem('_idMax', JSON.stringify(id));
  return id;
}

export default createId;
