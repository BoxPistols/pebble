import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';
import TableHeader from './Components/TableHeader';
import TableBody from './Components/TableBody';
import TableRow from './Components/TableRow';
import TableCell from './Components/TableCell';

import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data';

function CustomCellTable() {
  const COLUMNS = ['', 'name', 'contact', 'company'];

  return (
    <Table columns={COLUMNS} height="250px">
      <TableHeader mobileLabel="Contacts">
        <TableCell width="56px" />
        <TableCell width="300px">Name</TableCell>
        <TableCell>Contact</TableCell>
        <TableCell>Company</TableCell>
      </TableHeader>
      <TableBody>
        {
        PEOPLE_DATA_2.map((row, index) => (
          <TableRow key={index}>
            <TableCell width="56px">
              <Icon name="profile-circle" size="24" className="neutral-300" />
            </TableCell>
            <TableCell width="300px">
              <Text size="4" bold>{row.name}</Text>
            </TableCell>
            <TableCell>
              <div className="mb-2">
                <a className="blue" href={`mailto:${row.email}`}>{row.email}</a>
              </div>
              <div>{row.phone}</div>
            </TableCell>
            <TableCell>{row.company}</TableCell>
          </TableRow>
        ))
      }
      </TableBody>
    </Table>
  );
}

storiesOf('Table', module)
  .addDecorator(storyFn => <div style={{ width: '900px' }}>{storyFn()}</div>)
  .add('tabular data', () => (
    <Table>
      <TableHeader mobileLabel="Contacts">
        <TableCell>Name</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Company</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Vicki Rohlfs</TableCell>
          <TableCell>VP Marketing</TableCell>
          <TableCell>ntanslie1@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Stacy Mardlin</TableCell>
          <TableCell>Senior Cost Accountant</TableCell>
          <TableCell>smardlin2@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('custom cells', () => (
    <CustomCellTable />
  ));