/**
 * 모드
 * @enum {{READ: 'read', EDIT: 'edit'}} MODE
 */

/**
 * 카테고리 항목
 * @enum {{STUDY: 'study', WORK: 'work', HEALTH: 'health', ETC: 'etc'}} CATEGORIES
 */

/**
 * 할 일 정보를 담는 객체
 * @typedef {object} TodoItem
 * @property {number} id
 * @property {string} contents=''
 * @property {boolean} done=false
 * @property {string} category=''
 * @property {string[]} tags=[]
 */

/**
 * todos 모델
 * @typedef {TodoItem[]} TodoItems=[]
 */

/**
 * 할 일 추가하기
 * @function createTodo
 * @param {TodoItem} TodoItem
 * @returns {TodoItems}
 */

/** 모든 할 일 조회하기
 * @function getAllTodoItems
 * @returns {TodoItems}
 */

/**
 * id 로 할 일 index 찾기
 * @function getIndexOfTodoItem
 * @param {number} id
 * @returns {number}
 */

/**
 * 특정 할 일 조회하기 - id 로 찾기
 * @function getTodoItem
 * @param {number} id
 * @returns {TodoItem}
 */

/**
 * 특정 할 일 수정하기
 * @function updateTodoItem
 * @param {TodoItem} TodoItem
 * @returns {boolean}
 */

/**
 * 특정 할 일 삭제하기
 * @function deleteTodoItem
 * @param {number} id
 * @returns {boolean}
 */

/**
 * 모든 할 일 삭제하기
 * @function deleteAllTodoItems
 * @returns {TodoItems}
 */

/**
 * 할 일 불러오기
 * @function fetchTodoItems
 * @async
 * @returns {TodoItems}
 */

/**
 * 할 일 Template 생성
 * @function getTodoItemTemplate
 * @param {TodoItem} TodoItem
 * @param {string} Mode
 * @returns {HTMLElement}
 */

/**
 * 전체 할 일 render, default mode = READ
 * @function renderAllTodoItems
 * @param {TodoItems} TodoItems
 */

/**
 * 특정 할 일 모드 변경 후 render
 * @function changeModeOfTodoItem
 * @param {number} id
 */
