# Redux 
Redux is a ‘predictable state container for JavaScript Apps’

#### 3 main points
- predictable 
- state container
- for JS apps

#### Predictable 
The state of the application can change. In redux, all state transitions are explicit and it is possible to keep track of them. In other words, the changes to your application’s state becomes predictable, (ie. A todo app will have a task that is pending and the state change may be completed).

#### State Container
Redux solves the issues of uplifting state and prop drilling from React, you can think of it like a box out onto the side of your application and whatever component you have will be able to access that state. 

#### JS apps
Often, new developers may the mistake that redux is made for react and this isn’t true. Redux is a state management library and it can work with Angular, Vue or even vanilla JS apps. 

#### Important note
When using redux with react, those are two separate libraries, react is a UI library and there is a third library that is required when using react and redux. It is the react-redux library that helps connect the two libraries. 

## Getting Started
Refer to the DigitalCrafts/react-practice/redux-demo

## Real world scenario
Consider a cake shop

#### Entities
- shop
- shopkeeper
- customer

#### Activities
- customer - buy a cake
- shopkeeper - remove a cake from the shelf
- receipt - to keep track of transactions

## Three core concepts
#### Store
A term that you will hear about in redux. It holds the state of your application. In the real world scenario the shop can be thought of as the store.

#### Action
Describes what happened, in the scenario the customer is telling the shopkeeper that we wish to purchase a cake. This intention is what is known as an action in redux. 

#### Reducer
What ties the store and action together. In the scenario, the reducer is the shopkeeper, he receives the action by the customer and then removes a cake from the shelf. 

#### Summary
Redux is mainly formed about these three concepts.
- a store that holds the state of your application 
- an action that describes the changes in the state of the application 
- a reducer which actually carries to the state transition depending on the action








