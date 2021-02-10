import React from 'react';
import './table.css';


const Table = ({data, tableDataType}) => {
	let tableDataStatement;
	let arrayFromData= [];
	let indexKeys,updatedKeys ; 

	//set variables
	if(tableDataType === 'balanceSheetHistory'){
		tableDataStatement='balanceSheetStatements';
	}
	else if(tableDataType === 'cashflowStatementHistory'){
		tableDataStatement = 'cashflowStatements';
	}
	else{
		tableDataStatement = 'incomeStatementHistory';
	}


	if(data[tableDataType]){
		arrayFromData=[...data[tableDataType][tableDataStatement]];
		indexKeys = Object.keys(arrayFromData[0]);

		updatedKeys= indexKeys.filter(value=> value!=='maxAge'&& value!=='endDate');

	}
	 
	return (
		<div className='table'>
			<table>
				<thead>
					<tr>
						<th >{data.symbol}</th>
						{
							arrayFromData.map((sheetData,dateIndex) => 
						<th key={dateIndex}>{sheetData.endDate.fmt}</th>
						)}
					</tr>
				</thead>
						<tbody>
						{
							updatedKeys.map((heading,trIndex) => 
							<tr key={trIndex}> 
								<th className='table-headers'>{heading.split(/(?=[A-Z])/).join(' ').toUpperCase()}</th>
									{
									arrayFromData.map((sheetData,tdIndex) => 
										<td key={tdIndex}>{
										sheetData[heading] ?
										sheetData[heading].fmt ? sheetData[heading].fmt : '-'
										:
										'-'
										}</td>
										)
									}
							</tr>
							)
						}
						</tbody> 
					
			</table>
		</div>
	);
}

export default Table;