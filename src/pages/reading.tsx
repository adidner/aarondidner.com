import React, { ReactElement, useState } from 'react';
import Layout from '../components/Layout';
import { learningReadBookData, fictionReadBookData, learningToReadBookData, fictionToReadBookData, ToReadInterface, ReadInterface } from '../data/bookData';
import { LearningBookModal } from '../components/LearningBookModal';
import '../styles/reading.scss';

//this page will be the books I've read from fiction and selfhelp in 2 column table things
//Hope to add that the one's I've read will pull up modal cards when clicked with all their details

function Reading() {

  const createToReadList = (data: ToReadInterface[]): ReactElement => {
    return (
      <>
        <h3>Books to Read</h3>
        <ul>
          {
            data.map((book) => 
              <li>
                {book.title + " by " + book.author} 
              </li>
            )
          }
        </ul>
      </>
    );
  }

  function InnardsPlusModal(props: ReadInterface){
    const [visibility, setVisibility] = useState(false);
    
    return (
      <div>
        <li onClick={() => setVisibility(true)}>
          {props.title + " by " + props.author} 
        </li>
        <LearningBookModal visibility={visibility} handleClose={() => {setVisibility(false); console.log("in parent onClose")}} {...props}/>
      </div>
    );
  } 

  const createReadList = (data: ReadInterface[]): ReactElement => {
    


    return (
      <>
        <h3>Books I've Read</h3>
        <ul>
          {
            data.map((book) => 
              <InnardsPlusModal {...book} />
            )
          }
        </ul>
      </>
    );
  }

  return (
    <Layout>

      <div className={"hobbies-books-grid-container"}> 
        <h2 className={"hobbies-books-learning"}>Learning</h2>
        <div className={"hobbies-books-learning-to-read"}>{createToReadList(learningToReadBookData)}</div>
        <div className={"hobbies-books-learning-read"}>{createReadList(learningReadBookData)}</div>
        <h2 className={"hobbies-books-fiction"}>Fiction</h2>
        <div className={"hobbies-books-fiction-to-read"}>{createToReadList(fictionToReadBookData)}</div>
        <div className={"hobbies-books-fiction-read"}>{createReadList(fictionReadBookData)}</div>
      </div>    

    </Layout>
  );
}

export default Reading;