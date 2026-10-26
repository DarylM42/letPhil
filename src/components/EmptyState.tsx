function EmptyState({ message }: { message: string }) {
    return (
        <div className="border-2 border-dashed border-gray-300 font-bold p-8 text-center rounded">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="font-bold mb-2">No products here yet</h3>
            <p className="text-gray-500">{message}</p>
        </div>
    );
}

export default EmptyState;