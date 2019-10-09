interface InitialStateProps {
    isLoading: boolean
}

const initialState = {
    isLoading: false,
  };

  export default (state: InitialStateProps = initialState, action: any) => {
    switch (action.type) {
      default:
        return state;
    }
  };
