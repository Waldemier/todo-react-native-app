export class Todo {
    id?: string;
    task?: string;

    constructor(model: Partial<Todo>) {
        this.id = model.id;
        this.task = model.task;
    }
}
