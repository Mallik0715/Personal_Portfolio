import React, { useState } from 'react';

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // Data for the accordion
  const accordionData = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML."
    },
    {
      id: 3,
      question: "What are React hooks?",
      answer: "React hooks are functions that let you use state and lifecycle features in functional components."
    }
  ];

  // Single selection logic
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Multi-selection logic
  function handleMultiSelection(getCurrentId) {
    let updatedMultiple = [...multiple];

    // Check if the item is already selected (present in array)
    const itemIndex = updatedMultiple.indexOf(getCurrentId);

    if (itemIndex === -1) {
      // If not present, add it
      updatedMultiple.push(getCurrentId);
    } else {
      // If present, remove it
      updatedMultiple.splice(itemIndex, 1);
    }

    setMultiple(updatedMultiple);
  }

  return (
    <div className="Wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {/* Conditional rendering based on selection type */}
              {enableMultiSelection ? (
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data Present</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
