import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import './Pagination.scss';

const Pagination = ({active, pages, setActive}) => {
	//console.log('active', active);
	//console.log('pages', pages);
	const [links, setLinks] = useState([]);

    useEffect(() => {
		const tempLinks = [];	
		for (let i = 1; i <= pages; i++) { // 1-pages
			tempLinks[i] = {liClass: "page-item", spanClass: "page-link"}
		}
		setLinks(tempLinks);
	}, [pages]);

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
				<li className={cn(link.liClass, {"active": active === index})} key={index} onClick={() => setActive(index)}>
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
