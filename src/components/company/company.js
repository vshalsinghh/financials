import React from 'react';

import Table from '../table/table';
import Novalue from '../novalue/novalue';

import './company.css';


const Company = ({data, tableDataType, changeDataType}) => {
		let datahasValue;
		let indexKeys;
		data.quoteType ? datahasValue=data.quoteType.messageBoardId : datahasValue=false; 
		if(datahasValue){
			indexKeys=[...Object.keys(data.quoteType)];
		}
	return(
		<div>{ datahasValue ?
			<div className='company-data'>
				<div className='company'>
					<h2>Company details</h2>
					<div className='details'>
					<p><span>Symbol:</span> {data.quoteType.symbol}</p>
					<p><span>Exchange:</span> {data.quoteType.exchange}</p>
					<p><span>Short Name:</span> {data.quoteType.shortName}</p>
					<p><span>Long Name:</span> {data.quoteType.longName}</p>
					<p><span>Exchange TMZ:</span> {data.quoteType.exchangeTimezoneName}</p>
					<p><span>Timezone:</span> {data.quoteType.exchangeTimezoneShortName}</p>
					<p><span>Quote Type:</span> {data.quoteType.quoteType}</p>
					<p><span>Message Board Id:</span> {data.quoteType.messageBoardId}</p>
					<p><span>Market:</span> {data.quoteType.market}</p>
					</div>
				</div>
				<div className='statements'>
					<ul >
						<li onClick={() => changeDataType('incomeStatementHistory')}>Income Statement </li>
						<li	onClick={() => changeDataType('balanceSheetHistory')}> / Balance Sheet</li>
						<li	onClick={() => changeDataType('cashflowStatementHistory')}> / Cash Flow</li>
					</ul>
				</div>
				<Table data={data} tableDataType={tableDataType}/>
			</div>
			:
			<Novalue string='empty data'  />
		}
		</div>
		);
}

export default Company;