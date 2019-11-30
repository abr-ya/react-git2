import React from 'react';
import './Pagination.scss';

const Pagination = ({active, pages, setActive}) => {
	//console.log('active', active);
	//console.log('pages', pages);
	let links = [];
	for (let i = 1; i <= pages; i++) { // 1-pages
		links[i] = {liClass: "page-item", spanClass: "page-link"}
	}
	links[active].liClass = "page-item active";
	//console.log(links);
	const htmlLinks = links.map((link, index) => {
		return (<li className={link.liClass} key={index} onClick={() => setActive(index)}>
					<span className={link.spanClass}>{index}</span>
		</li>);
	});
	//console.log(htmlLinks);
    return (
		<nav aria-label="Page navigation">
		  <ul className="pagination">
		  	{ active === 1
				?	<li className="page-item disabled">
						<span className="page-link">Previous</span>
					</li>
				:	<li className="page-item" onClick={() => setActive(active - 1)}>
						<span className="page-link">Previous</span>
					</li>
			}
			{htmlLinks}
			{ active === pages
				?	<li className="page-item disabled">
						<span className="page-link">Next</span>
					</li>
				:	<li className="page-item" onClick={() => setActive(active + 1)}>
						<span className="page-link">Next</span>
					</li>
			}			
		  </ul>
		</nav>
    )
}

export default Pagination;
