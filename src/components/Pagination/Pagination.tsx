import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { PaginationProps } from '@interfaces/props';

const Pagination: FC<PaginationProps> = (props) => {
    const handlePageClick = (data: any) => {
        //console.log('Clicked page: ', data.selected + 1);
        props.setOffset(data.selected + 1);
    };

    return (
        <div className="flex justify-between w-full bg-white rounded-3xl h-7 text-xs px-3 select-none md:text-sm md:h-9 lg:h-9 lg:text-sm xl:h-10 xl:text-lg">
            <ReactPaginate
                className="flex w-full justify-between items-center text-secondary"
                pageClassName="flex justify-center w-1/12"
                pageLinkClassName="font-bold hover:text-accent"
                breakClassName="flex justify-center font-bold hover:text-accent w-1/12"
                activeClassName="text-accent"
                previousClassName="w-1/4 flex justify-start hover:text-accent "
                nextClassName="w-1/4 flex justify-end hover:text-accent"
                previousLabel={<ChevronDoubleLeftIcon className="h-6 md:h-7 lg:h-7 xl:h-8" />}
                nextLabel={<ChevronDoubleRightIcon className="h-6 md:h-7 lg:h-7 xl:h-8" />}
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
