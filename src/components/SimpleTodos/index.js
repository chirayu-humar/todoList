// Write your code here
import {Component} from 'react'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteButton = event => {
    const {todosList} = this.state
    const newList = todosList.filter(
      each => `button${each.id}` !== event.currentTarget.id,
    )
    this.setState({
      todosList: newList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="bg-container">
        <h1>Simple Todos</h1>
        <ul className="inner">
          {todosList.map(eachItem => (
            <TodoItem
              key={eachItem.id}
              details={eachItem}
              deleteButton={this.deleteButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos