import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

const Pagination: FC = () => {
    const handlePageClick = (data: any) => {
        console.log('Clicked page: ', data.selected + 1);
    };

    return (
        <div className="flex justify-between w-full bg-white rounded-3xl h-12 px-3 select-none">
            <ReactPaginate
                className="flex w-full justify-between items-center text-secondary"
                pageClassName="flex justify-center w-1/12"
                pageLinkClassName="font-bold hover:text-accent"
                breakClassName="flex justify-center font-bold hover:text-accent w-1/12"
                activeClassName="text-accent"
                previousClassName="w-1/4 flex justify-start hover:text-accent "
                nextClassName="w-1/4 flex justify-end hover:text-accent"
                previousLabel={<ChevronDoubleLeftIcon className="h-10" />}
                nextLabel={<ChevronDoubleRightIcon className="h-10" />}
                breakLabel="..."
                pageCount={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
            />
        </div>
    );
};

export default Pagination;