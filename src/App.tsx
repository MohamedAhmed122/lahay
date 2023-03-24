import { collection, getDocs } from 'firebase/firestore';
import './App.css';
import { db } from './firebase';

function App() {
  const callQueryShot = async () => {
    const querySnapshot = await getDocs(collection(db, 'menu'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  callQueryShot();

  return (
    <div className="App">
      <h1>Lahay</h1>
    </div>
  );
}

export default App;
