import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Education() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong><b>EDUCATION-</b></strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th><u>Qualification</u></th>
								<th><u>Institute</u></th>
								<th><u>Year of passing</u></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>B-Tech</td>
								<td>OP Jindal Univerity</td>
								<td>2024</td>
							</tr>
							<tr>
								<td>Senior Secondary(XII)</td>
								<td>Gayatri Vidya Peeth</td>
								<td>
									2019
								</td>
							</tr>
							<tr>
								<td>Secondary(X)</td>
								<td>Gayatri Vidya Peeth</td>
								<td>
									2016
								</td>
							</tr>
							<tr>
								<td>Other Awards</td>
								<td>Dec 2018</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
