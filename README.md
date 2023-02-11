## 챌린지 과제 가이드

[과제 가이드 링크](https://gist.github.com/pocojang/e247baddfb4345903751ec592fd836ff)

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에서 원하는 Interface 코드를 가져다 사용하세요
- 설계 & 모델링 된 Interface를 실제로 구현하는 챌린지 과제입니다.
- 모든 요구사항은 설계 & 모델링을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
    - 이미 1차~2차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에 제출해주세요.
- README.md를 꼭 작성해 주세요.
    - 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 필수 요구사항

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- 설계 & 모델링된 TypeScript's Interface를 따라 내부 구현부를 모두 작성한다.
- 동작되지 않더라도 설계 & 모델링을 지키는 것이 원칙이다.
    - 절대로 동작과 구현을 위해 설계 & 모델링 규칙을 어기지 않습니다.
- README.md 혹은 별도의 문서에 어떤 부분의 타입을 고치면 좋은지 피드백과 출처 링크를 남깁니다.

## 피드백

[설계 코드](https://github.com/mamonde456/wanted-pre-onboarding-challenge-fe-2/blob/master/src/index.ts)

- todo 를 담는 list 객체가 없어서 별도로 만들었습니다.
- 함수의 반환 타입이 없어서 설계 의도를 제가 판단하여 작성하였습니다.
  ```typescript
  function createToDo(todo: IToDo) {
    todoList.push(todo);
    return todoList;
  }
  ``` 
- read 함수의 경우 매개변수가 id 인데 interface 타입이어서 id.id 로 접근했는데, destructuring 을 하면 좋을 것 같습니다.
- id 만 받는데 굳이 interface 를 쓰지 않아도 좋을 것 같고, ? 로 선택적 프로퍼티가 되어있는데 id 는 필수로 필요하지 않을까 생각합니다.
  ```typescript
  interface IReadToDo {
   id?: string;
  }
  function readToDo(id: IReadToDo) {
    return todoList.find(it => it.id === id.id);
  }
  ```
- update 함수는 id, tag 를 받는데, todo id 인지, todo 가 가진 tags 의 tag id 인지 잘 모르겠습니다.
- 우선 매개변수로 봤을 때 해당 id 의 todo 에서 같은 id 의 tag 를 업데이트 하는 것으로 구현했습니다.
- IToDo 에도 tags? 로 되어있고, 매개변수에도 tag? 이고, ITags 에도 tag? 라서 없는 경우에 대한 예외처리가 많이 발생한 것 같습니다.
  ```typescript
  interface ITags {
    id: string;
    tag?: string;
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
  ```