const useUnsupported = (id: string) => {
  return {
    data: undefined,
    isLoading: false,
    isError: new Error('Invalid spotify url.')
  };
};

export default useUnsupported;
