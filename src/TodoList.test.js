import {render,fireEvent} from '@testing-library/react';
import TodoList from './TodoList';

it('should renders without crashing',()=>{
  render(<TodoList/>);
})

it('should match snapshot',()=>{
const {asFragment} = render(<TodoList/>);
expect(asFragment()).toMatchSnapshot();
})


describe("Logic tests", () => {
  let todoList;
  let todo;
  let submitBtn;

  beforeEach(() => {
    todoList = render(<TodoList />);
    todo = todoList.getByLabelText("Todo");
    submitBtn = todoList.queryByText("Add");
  });

  it("should be able to edit the form and should clear the input values when the form is submitted", () => {
    //the form should be empty
    expect(todo.value).toEqual("");

    //fill out the form
    fireEvent.change(todo, { target: { value: "finish testing" } });

    //the form input values should be correct
    expect(todo.value).toEqual("finish testing");

    fireEvent.click(submitBtn);

    //the form should be empty after submit
    expect(todo.value).toEqual("");
  });

  it("should be able to make a new todo", () => {
    //there should not be any todos
    expect(todoList.queryByText("finish testing")).not.toBeInTheDocument();

    //make a new todo
    fireEvent.change(todo, { target: { value: "finish testing" } });
    fireEvent.click(submitBtn);

    //there should be a new todo
    expect(todoList.queryByText("finish testing")).toBeInTheDocument();
  });

  it("should delete the todo", () => {
    //make a new todo
    fireEvent.change(todo, { target: { value: "finish testing" } });
    fireEvent.click(submitBtn);

    //there should be a new todo
    expect(todoList.queryByText("finish testing")).toBeInTheDocument();

    //delete the todo
    const deleteBtn = todoList.queryByText("X");
    fireEvent.click(deleteBtn);


      //the todo should be deleted
    expect(todoList.queryByText("finish testing")).not.toBeInTheDocument();
  });
});
