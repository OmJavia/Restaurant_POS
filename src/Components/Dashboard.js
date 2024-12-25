import DashboardCard from './Dashboardcard';
import './Dashboard.css';
import { FaBicycle, FaUtensils } from 'react-icons/fa';
import { TbClipboardList } from "react-icons/tb";
import { MdDeliveryDining, MdCurrencyRupee } from 'react-icons/md';
import Sidebar from './Sidebar';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const cardsData = [
    { icon: <MdCurrencyRupee />, title: 'Sales', subtitle: '60000', color: '#E6F6F1' },
    { icon: <TbClipboardList />, title: 'Total Orders', subtitle: '366', color: '#db95f5' },
    { icon: <FaUtensils />, title: 'Dine in', subtitle: '182', color: '#F5E6FF' },
    { icon: <FaBicycle />, title: 'Delivery', subtitle: '39', color: '#E6F7FF' },
    { icon: <MdDeliveryDining />, title: 'Zomato', subtitle: '74', color: '#f55747' },
    { icon: <MdDeliveryDining />, title: 'Swiggy', subtitle: '71', color: '#f7f14b' },
  ];

  const variantColors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  };

  const carde = [
    {
      name: "Dine In",
      icon: <FaUtensils />,
      kot: "Kot No: 12",
      table: "Table No: 03",
      title: "Rahul Verma",
      order: "1 x Burger, 2 x Fries",
      variant: "success",
    },
    {
      name: "Zomato",
      icon: <MdDeliveryDining />,
      kot: "Kot No: 20",
      table: "Take Away",
      title: "Mina Shah",
      order: "1 x Pizza, 2 x Cold Coffee",
      variant: "danger",
    },
    {
      name: "Swiggy",
      icon: <MdDeliveryDining />,
      kot: "Kot No: 32",
      table: "Take Away",
      title: "Rakul Jain",
      order: "2 x Sandwich, 1 x Ice Tea",
      variant: "warning",
    },
    {
      name: "Delivery",
      icon: <MdDeliveryDining />,
      kot: "Kot No: 18",
      table: "Take Away",
      title: "Om Javia",
      order: "1 x Pizza, 2 x Fries, 2 x Sandwich",
      variant: "primary",
    },
  ];

  const FoodCard = ({ card }) => {
    const [timerActive, setTimerActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(900); // 15 minutes
    const [orderAccepted, setOrderAccepted] = useState(false); // New state for order accepted

    useEffect(() => {
      let timer;
      if (timerActive) {
        timer = setInterval(() => {
          setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
      }

      return () => clearInterval(timer);
    }, [timerActive]);

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleAcceptOrder = () => {
      setTimerActive(true);
      setOrderAccepted(true);
    };

    return (
      <Col xs={3}>
        <Card text={card.variant.toLowerCase() === 'light' ? 'dark' : 'black'} style={{ width: '20rem' }} className="mb-2" border={card.variant}>
          <Card.Header style={{ backgroundColor: variantColors[card.variant] }}>
            <Row>
              <Col>{card.name}</Col>
              <Col className="text-end">{card.icon}</Col>
            </Row>
          </Card.Header>

          <Card.Body>
            <Row>
              <Col>{card.kot}</Col>
              <Col className="text-end">{card.table}</Col>
            </Row>

            <Card.Title>
              <Row>
                <Col>{card.title}</Col>
                <Col className="text-end">Call</Col>
              </Row>
            </Card.Title>

            <Card.Text>
              {card.order.split(',').map((item, i) => (
                <span key={i}>{item}<br /></span>
              ))}
            </Card.Text>

            <Row className="align-items-center">
              <Col className="text-start">
                {orderAccepted ? (
                  <div>Preparing in: {formatTime(timeRemaining)}</div>
                ) : (
                  <Button variant="success" onClick={handleAcceptOrder}>Accept Order</Button> // Green button
                )}
              </Col>
              <Col className="text-end">
                <Button
                  variant={orderAccepted ? 'danger' : 'danger'} // Change color based on order status
                  onClick={() => {
                    if (!orderAccepted) {
                      alert('Order declined');
                    } else {
                      setTimerActive(false); // Stop the timer if needed
                    }
                  }}
                >
                  {orderAccepted ? 'Food is Ready' : 'Decline Order'}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <div className='dashboard-container'>
        <div className='sidebar-container'>
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <h1>Dashboard</h1>
          <div className="cardcontainer">
            {cardsData.map((card, index) => (
              <DashboardCard
                key={index}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;



