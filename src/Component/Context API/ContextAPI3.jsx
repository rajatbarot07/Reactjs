import React from 'react';
import { data, data1 } from '../../App'

function ContextAPi() {
  return (
    <>
      <data.Consumer>
        {
          (name) => {
            return (
              <>
                <data1.Consumer>
                  {
                    (field) => {
                      return (
                        <>
                          <h1>Hello {name}</h1>
                          <h2>Your Position is {field} Developer</h2>
                          <p>To avoid prop drilling we can use ContextApi</p>
                          {/* <p>ContextAPI :- In ContextAPi we can create context then the component is binded in the provider and the value which is stored in the variable then that value will be stored in the value attribute as an value in the provider and that value we can consume in the component where we required and consumer accepts only function.</p> */}
                        </>
                      )
                    }
                  }
                </data1.Consumer>
              </>
            )
          }
        }
      </data.Consumer>
    </>
  );
}

export default ContextAPi;