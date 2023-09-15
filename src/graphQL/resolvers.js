const resolvers = {
    Query: {
        sampleQuery: () => {
            return { field: "Sample Data" };
        },
    },
};

export default resolvers;
