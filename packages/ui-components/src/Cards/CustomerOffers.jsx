import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07);
  padding: 4%;
  background-color: white;
  border-radius: 8px;
`;

const Title = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 16px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
`;

const AutoSpace = styled.div`
  flex-grow: 1;
`;

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
  border-bottom: 1px solid grey;
`;

const TableBody = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const RowCell = styled.div`
  width: 12%;
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const HeaderCell = styled.div`
  width: 12%;
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const TableBodyBlank = styled.div`
  padding: 1%;
  font-family: Rubik;
  font-size: 14px;
  color: #8798ad;
  font-weight: 500;
  letter-spacing: -0.47px;
  line-height: 23px;
  white-space: nowrap;
`;

const CustomerOffers = (props) => {
  const { title, offers } = props;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AutoSpace />
      </Header>
      <TableHeader>
        <HeaderCell>Offer ID</HeaderCell>
        <HeaderCell>Offer Type</HeaderCell>
        <HeaderCell>Offer Start Date</HeaderCell>
        <HeaderCell>Offer End Date</HeaderCell>
        <HeaderCell>Offer Status</HeaderCell>
      </TableHeader>
      {typeof offers !== 'undefined' && Array.isArray(offers) && offers.length !==0  ? (
        <TableBody>
          {offers.map((offer, index) => {
            return (
              <TableRow key={`row-${index + 1}`}>
                <RowCell key={`row-${index + 1}-col1`}>{offer.offerId}</RowCell>
                <RowCell key={`row-${index + 1}-col2`}>
                  {offer.offerType}
                </RowCell>
                <RowCell key={`row-${index + 1}-col3`}>
                  {offer.accountOfferStartDate}
                </RowCell>
                <RowCell key={`row-${index + 1}-col4`}>
                  {offer.accountOfferEndDate}
                </RowCell>
                <RowCell key={`row-${index + 1}-col5`}>{offer.status}</RowCell>
              </TableRow>
            );
          })}
        </TableBody>
      ) : (
        <TableBody>
          <TableBodyBlank>No records found</TableBodyBlank>
        </TableBody>
      )}
    </Container>
  );
};

export default CustomerOffers;
