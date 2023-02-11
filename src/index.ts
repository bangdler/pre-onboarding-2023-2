interface ITags {
  id: string;
  tag?: string;
}
interface IToDo {
  id: string;
  content: string;
  category: 'DOING' | 'DONE' | 'TODO';
  isFinish: boolean;
  tags?: ITags[];
}

const todoList: IToDo[] = [];

function createToDo(todo: IToDo) {
  todoList.push(todo);
  return todoList;
}

interface IReadToDo {
  id?: string;
}

function readToDo(id: IReadToDo) {
  return todoList.find(it => it.id === id.id);
}

interface IUpdateToDo {
  id: string;
  tag?: ITags;
}

function updateToDo({ id, tag }: IUpdateToDo) {
  const oldTodoIdx = todoList.findIndex(it => it.id === id);
  if (!todoList[oldTodoIdx].tags) return false;
  const oldTodoTags = todoList[oldTodoIdx].tags as ITags[];
  const targetTagIdx = oldTodoTags.findIndex(it => it.id === id);
  if (targetTagIdx === -1) return false;
  if (!tag) return false;
  oldTodoTags[targetTagIdx] = tag;
  return oldTodoTags[targetTagIdx];
}

interface IDeleteToDo {
  id: string;
  tags?: ITags[];
}

function deleteToDo({ id, tags }: IDeleteToDo) {
  const targetTodoIdx = todoList.findIndex(it => it.id === id);
  if (targetTodoIdx === -1) return false;
  todoList.splice(targetTodoIdx, 1);
  return todoList;
}
createToDo({ id: '1', category: 'DOING', content: 'hi', tags: [{ id: '1' }], isFinish: false });
updateToDo({ id: '1', tag: { id: '1', tag: 'happy' } });
deleteToDo({ id: '1', tags: [] });
