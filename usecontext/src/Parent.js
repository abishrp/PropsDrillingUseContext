// import React from 'react'
// import { useState } from 'react';

// const Parent = () => {
//     const [name, setName] = useState("Abish");
//     const [course, setCourse] = useState("ECE");
//   return (
//     <div>
//         <h2>Parent component</h2>
//         <ChildA user={name}/>
//     </div>
//   )
// }

// function ChildA({user})
// {
//     return(
//         <div>
//             <h2>child A</h2>
//             <ChildB user={user}/>
//         </div>
//     )
// }

// function ChildB({user})
// {/             <h2>Name is {user}</h2>
//         </div>
//     )
// }

// export default Parent


// import React, { createContext, useContext } from 'react'
// import { useState } from 'react';
// const use = React.createContext(null);

// const Parent = () => {
//     const [name, setName] = useState("Abish");
//     const [course, setCourse] = useState("ECE");
//   return (
//     <use.Provider value={{name}}>
//         <h2>Parent component</h2>
//         <ChildA user={name}/>
//     </use.Provider>
//   )
// }

// function ChildA()
// {
//     return(
//         <div>
//             <h2>child A</h2>
//             <ChildB/>
//         </div>
//     )
// }

// function ChildB()
// {
//     const {user} = useContext(use);
//     return(
//         <div>
//             <h2>Name is {user}</h2>
//         </div>
//     )
// }

// export default Parent
//     return(
//         <div>



import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

const Parent = () => {
  const [name, setName] = useState("Abish");
  const [course, setCourse] = useState("ECE");

  return (
    <UserContext.Provider value={{ name }}>
      <h2>Parent component</h2>
      <ChildA />
    </UserContext.Provider>
  );
};

function ChildA() {
  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
}

function ChildB() {
  const { name } = useContext(UserContext);

  return (
    <div>
      <h2>Name is {name}</h2>
    </div>
  );
}

export default Parent;
