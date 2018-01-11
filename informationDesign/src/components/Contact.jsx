import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid, Card } from 'semantic-ui-react'
import { Redirect } from 'react-router'

var sectionStyle = {
    paddingTop: '5em',
    paddingBottom: '5em'
};

var cardFormStyle = {
  padding: '2em',
}

var containerGridColumnStyle = {
  padding: '2em',
}

var cardHeaderStyle = {
  textAlign: 'center',
  fontSize: '24px',
  textWeight: '1500',
}

export default class Contact extends Component {

    state ={
      fName: '',
      lName: '',
      fireRedirect: false,
    };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.setState({ fireRedirect: true })
    };

  render() {
        const { fireRedirect } = this.state

    return (
      <div style={ sectionStyle }>

          <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              
            </Grid.Column>
            <Grid.Column 
            mobile={16} tablet={8} computer={8}
            style={containerGridColumnStyle}
            >
                <Card
                  style={cardFormStyle}
                  fluid
                  raised
                  color='red'
                >
                <Card.Header style={ cardHeaderStyle }>
                  Contact J. Graves
                </Card.Header>
                <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <input
                    name='fName' 
                    type='text' 
                    placeholder='First Name' 
                    value = {this.state.fName} 
                    onChange={e => this.change(e)}                    
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input
                    name='lName' 
                    type='text' 
                    placeholder='Last Name' 
                    value = {this.state.lName} 
                    onChange={e => this.change(e)} 
                    />

                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button type='submit' onClick={e => this.onSubmit(e)}>Submit</Button>
                </Form>
                {fireRedirect && (
                  <Redirect to = {'/ThankYou'}
                  />
                )}
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              
            </Grid.Column>
          </Grid.Row>
          </Grid>

      </div>

    )
  }
}