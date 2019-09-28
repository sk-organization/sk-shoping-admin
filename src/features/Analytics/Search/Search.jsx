import React from 'react';
import { Card, Button, DatePicker, Tabs } from 'antd';
import { Pie } from 'react-chartjs-2';

const { TabPane } = Tabs;

const keyWordsWithResults = (
  <table>
    <tr>
      <th>Search Term</th>
      <th>Number of Searches</th>
      <th>Number of Results</th>
      <th>Search Last Perfomed</th>
    </tr>
    <tr>
      <td>indo western kurti</td>
      <td>120</td>
      <td>2248</td>
      <td>22nd Nov 2019</td>
    </tr>
    <tr>
      <td>net saree</td>
      <td>400</td>
      <td>140</td>
      <td>22nd Nov 2019</td>
    </tr>
  </table>
);

const keyWordsWithoutResults = (
  <table>
    <tr>
      <th>Search Term</th>
      <th>Number of Searches</th>
      <th>Search Last Perfomed</th>
    </tr>
    <tr>
      <td>than kapda</td>
      <td>10</td>
      <td>22nd Nov 2019</td>
    </tr>
    <tr>
      <td>net than</td>
      <td>15</td>
      <td>22nd Nov 2019</td>
    </tr>
  </table>
);

const bestPerformingKeyWords = (
  <table>
    <tr>
      <th>Search Term</th>
      <th>Number of Searches</th>
      <th>Number Of Results</th>
      <th>Search Last Perfomed</th>
    </tr>
    <tr>
      <td>lehenga</td>
      <td>10</td>
      <td>4</td>
      <td>22nd Nov 2019</td>
    </tr>
    <tr>
      <td>suit</td>
      <td>5</td>
      <td>45</td>
      <td>22nd Nov 2019</td>
    </tr>
  </table>
);

const worstPerformingKeyWords = (
  <table>
    <tr>
      <th>Search Term</th>
      <th>Number of Searches</th>
      <th>Number Of Results</th>
      <th>Search Last Perfomed</th>
    </tr>
    <tr>
      <td>lehenga</td>
      <td>10</td>
      <td>4</td>
      <td>22nd Nov 2019</td>
    </tr>
    <tr>
      <td>suit</td>
      <td>5</td>
      <td>45</td>
      <td>22nd Nov 2019</td>
    </tr>
  </table>
);

const searchTermCorrections = (
  <table>
    <tr>
      <th>Search Term</th>
      <th>Number of Searches</th>
      <th>Number Of Results</th>
      <th>Search Last Perfomed</th>
    </tr>
    <tr>
      <td>lehenga</td>
      <td>10</td>
      <td>4</td>
      <td>22nd Nov 2019</td>
    </tr>
    <tr>
      <td>suit</td>
      <td>5</td>
      <td>45</td>
      <td>22nd Nov 2019</td>
    </tr>
  </table>
);

const SearchReport = () => {
  return (
    <div>
      <h3>OVERVIEW</h3>
      <div
        style={{
          width: 400,
          backgroundColor: '#f6f7f9',
          marginBottom: 10,
          padding: 5,
        }}
      >
        <strong>Date Range: </strong>
        <DatePicker /> <Button type="primary">Go</Button>
        <br />
        <div>
          <span>Search Summary</span>
          <ul>
            <li>Nuberm Of Searches: 456</li>
            <li>Most Searches: in 1month</li>
            <li>Average Searches: 15</li>
            <li>Most Popular Term with Results: 800 indo western</li>
            <li>Most Popular Term without Results: than kapda</li>
          </ul>
        </div>
      </div>
      <Card style={{ width: 600, backgroundColor: '#f6f7f9' }}>
        <div style={{ textAlign: 'right', fontSize: 16, marginBottom: 20 }}>
          <span>
            Top 10 Searches Keyword from 22st Oct 2019 to 21st Nov 2019{' '}
          </span>
        </div>
        <Pie
          data={{
            datasets: [
              {
                data: [40, 40, 30, 20, 30, 13, 23, 28, 80, 120],
                backgroundColor: [
                  '#ff6384',
                  '#36a2eb',
                  '#ffcd56',
                  '#D01F39',
                  '#EF626C',
                  '#70EE9C',
                  '#EF9118',
                  '#51A3A3',
                  '##f6faf5',
                  '#fbc531',
                  '#0097e6',
                  '#441678',
                  '#FEC300',
                ],
              },
            ],
            labels: [
              'kurti',
              'saree',
              'western top',
              'plazo set suit',
              'printed saree',
              'gown long',
              'blue legis',
              'banarsi saree',
              'pink net saree',
              'net saree',
            ],
          }}
        />
      </Card>
      <br />
      <br />
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="Keyword With Result" key="1">
          <div>{keyWordsWithResults}</div>
        </TabPane>
        <TabPane tab="Keyword Wtihout Result" key="2">
          <div>{keyWordsWithoutResults}</div>
        </TabPane>
        <TabPane tab="Best Performing Keywords" key="3">
          <div> {bestPerformingKeyWords}</div>
        </TabPane>
        <TabPane tab="Worst Performing Keywords" key="5">
          <div>{worstPerformingKeyWords}</div>
        </TabPane>
        <TabPane tab="Search Term Corrections" key="6">
          <div>{searchTermCorrections}</div>
        </TabPane>
      </Tabs>
      <br />
      <br />
    </div>
  );
};

export default SearchReport;
