import React from 'react';
import cn from 'classnames';
import './Pagination.scss';

const Pagination = ({active, pages, setActive}) => {
	//console.log('active', active);
	//console.log('pages', pages);
	let links = [];
	for (let i = 1; i <= pages; i++) { // 1-pages
		links[i] = {liClass: "page-item", spanClass: "page-link"}
	}
	links[active].liClass = "page-item active";
	
	//const [links1, setLinks1] = useState([]);
	console.log(links);
    return (
		<nav aria-label="Page navigation">
		  <ul className="pagination">
			{<li
				className={cn("page-item", {"disabled": active === 1})}
				onClick={() => {if (active !== 1) setActive(active - 1)}}
			>
				<span className="page-link">Previous</span>
			</li>}
			{links.map((link, index) => (
				<li className={link.liClass} key={index} onClick={() => setActive(index)}>
					<span className={link.spanClass}>{index}</span>
				</li>
			))}
			{<li
				className={cn("page-item", {"disabled": active === pages})}
				onClick={() => {if (active !== pages) setActive(active + 1)}}
			>
				<span className="page-link">Next</span>
			</li>}
		  </ul>
		</nav>
    )
}

export default Pagination;
