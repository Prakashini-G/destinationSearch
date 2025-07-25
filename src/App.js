import DestinationSearch from './components/DestinationSearch'

const destinationsList = [
  {
    id: 1,
    name: 'Paris',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/paris-img.png',
  },
  {
    id: 2,
    name: 'Tokyo',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tokyo-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'London',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/london-img.png',
  },
  {
    id: 5,
    name: 'Sydney',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sydney-img.png',
  },
  {
    id: 6,
    name: 'Rome',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/rome-img.png',
  },
  {
    id: 7,
    name: 'Barcelona',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/barcelona-img.png',
  },
  {
    id: 8,
    name: 'Dubai',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/dubai-img.png',
  },
  {
    id: 9,
    name: 'Singapore',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/singapore-img.png',
  },
  {
    id: 10,
    name: 'Berlin',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/berlin-img.png',
  },
  {
    id: 11,
    name: 'Amsterdam',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/amsterdam-img.png',
  },
  {
    id: 12,
    name: 'Los Angeles',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/los-angeles-img.png',
  },
  {
  id: 13,
  name: "Los Angeles",
  imgUrl: "https://assets.ccbp.in/frontend/react-js/los-angeles-img.png"
},
{
  id: 14,
  name: "Estonia",
  imgUrl: "https://assets.ccbp.in/frontend/react-js/estonia-img.png"
},
{
  id: 15,
  name: "Budapest",
  imgUrl: "https://assets.ccbp.in/frontend/react-js/budapest-img.png"

}
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
