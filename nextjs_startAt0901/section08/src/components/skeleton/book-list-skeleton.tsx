import BookItemSkeleton from "./book-item-skeleton";

const BookListSkeleton = ({ count }: { count: number }) => {
    return new Array(count).fill(0).map((_, idx) => {
        return <BookItemSkeleton key={"book_items" + idx} />;
    });
};

export default BookListSkeleton;
