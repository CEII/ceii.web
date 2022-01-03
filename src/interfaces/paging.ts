export interface PagingInfo {
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
}

export interface PagingQuery {
    index?: number;
    size?: number;
}
