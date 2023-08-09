import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function RestReview({ re }) {
  // console.log(re);

  const [open, setOpen] = useState(false);

  return (
    <div>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              {
                re?.map((item) => (
                  <div>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                    <p>{item.rating}</p>
                  </div>

                ))
              }
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default RestReview