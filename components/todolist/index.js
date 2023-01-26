import React, { Component } from 'react'
import styled from 'styled-components'


const ItemRow = styled.div`
  position: relative;
  box-sizing: border-box;
  font-family: 'Montserrat';

  &.complete {
    color: grey;
    text-decoration: line-through;
  }
`

const Item = ({title, complete}) => (
  <ItemRow>
    <input
      type="checkbox"
      checked={complete}
      onClick={el => el.target.offsetParent.classList.toggle('complete')}
    />
    <strong>{title}</strong>
  </ItemRow>
)

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todo_list: [
				{ title: 'lorem ipsum dolor sit amit', complete: false, id: 1 },
				{ title: 'lorem ipsum dolor sit amit', complete: false, id: 2 },
				{ title: 'lorem ipsum dolor sit amit', complete: false, id: 3 }
			]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const todo_list = this.state.todo_list
    todo_list.push({
      title: document.getElementById('todo-title').value,
      complete: false,
      id: todo_list[todo_list.length - 1] + 1
    })

    this.setState({ todo_list })
  }

	render() {
		return (
			<div>
				<input type="text" placeholder="Adicionar Item" id="todo-title"/>
				<input type="submit" onClick={this.handleClick} />

        <div className="list">
          {this.state.todo_list.map(x => <Item title={x.title} complete={x.complete} key={x.id} />)}
        </div>
			</div>
		)
	}
}
