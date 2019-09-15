import React, { useState, useEffect } from 'react';
import { Grid, Image, Label, Segment, Button, Icon } from 'semantic-ui-react';

const Customer = () => {
  const [loading, setLoading] = useState(false);
  const [loyalCustomer, setLoyalCustomer] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoyalCustomer({
        name: 'Mike Henry',
        email: 'mikehenry@gmail.com',
        phone: '+977-9812954738',
      });
      setLoading(false);
    }, 3000);
  }, []);

  const { name, email, phone } = loyalCustomer;

  return (
    <Grid columns={3}>
      <Grid.Column width="5">
        <Segment loading={loading} color="blue" raised>
          <Label as="a" color="blue" ribbon>
            Loyal Customer
          </Label>
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <br />
          <div>
            <h3>{name}</h3>
            <span>{email}</span>
            <br />
            <span>{phone}</span>
          </div>
          <br />
          <div>
            <Button size="small" as="div" labelPosition="right">
              <Button color="blue" icon>
                <Icon name="cart " />
                Purchased
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                12,350
              </Label>
            </Button>
          </div>
          <br />
          <br />
          <div style={{ textAlign: 'right' }}>
            <Button size="small" primary>
              Send Messege
            </Button>
          </div>
        </Segment>
      </Grid.Column>

      <Grid.Column width="5">
        <Segment loading={loading} color="blue" raised>
          <Label as="a" color="blue" ribbon>
            Loyal Customer
          </Label>
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <br />
          <div>
            <h3>{name}</h3>
            <span>{email}</span>
            <br />
            <span>{phone}</span>
          </div>
          <br />
          <div>
            <Button size="small" as="div" labelPosition="right">
              <Button color="blue" icon>
                <Icon name="cart " />
                Purchased
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                12,350
              </Label>
            </Button>
          </div>
          <br />
          <br />
          <div style={{ textAlign: 'right' }}>
            <Button size="small" primary>
              Send Messege
            </Button>
          </div>
        </Segment>
      </Grid.Column>

      <Grid.Column width="5">
        <Segment loading={loading} color="blue" raised>
          <Label as="a" color="blue" ribbon>
            Loyal Customer
          </Label>
          <Image src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <br />
          <div>
            <h3>{name}</h3>
            <span>{email}</span>
            <br />
            <span>{phone}</span>
          </div>
          <br />
          <div>
            <Button size="small" as="div" labelPosition="right">
              <Button color="blue" icon>
                <Icon name="cart " />
                Purchased
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                12,350
              </Label>
            </Button>
          </div>
          <br />
          <br />
          <div style={{ textAlign: 'right' }}>
            <Button size="small" primary>
              Send Messege
            </Button>
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Customer;
