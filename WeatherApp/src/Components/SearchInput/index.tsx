import React, {useContext, useEffect} from 'react'
import Styled from 'styled-components/native';
import { SearchContext } from '~/Context/SerachContext';

// interface Search {
    
// }

const Input = Styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #FFF;
  padding: 0px 8px;
`
const Container = Styled.KeyboardAvoidingView`
    position: absolute;
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    justify-content: flex-end;
`
interface Props {
  hideTodoInput: () => void;
}


const SearchInput = ({ hideTodoInput} :Props) => {
    
    const { text, searchText } = useContext<ISearchList>(SearchContext);
    // useEffect(() => {

    // }, [text])

    return (
        <Container>
        <Input 
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="도시 이름"
            returnKeyType="done"
            onSubmitEditing={({nativeEvent})=> {
                searchText(nativeEvent.text);
                hideTodoInput();
            }
        }
        />
        </Container>

    )
}

export default SearchInput

// import React, { useContext } from 'react';
// import Styled from 'styled-components/native';

// import { TodoListContext } from '~/Context/TodoListContext';

// const Input = Styled.TextInput`
//   width: 100%;
//   height: 40px;
//   background-color: #FFF;
//   padding: 0px 8px;
// `;

// interface Props {
//   hideTodoInput: () => void;
// }


// const TextInput = ({ hideTodoInput }: Props) => {

//   //useContext 초기값을 우리가 만든 TodoListContext를 전달하고, 
//   //전역 데이터인 할일 리스트에 데이터를 추가하기 위해 addTodoList 함수를 할당받음
//   const { addTodoList } = useContext<ITodoListContext>(TodoListContext);
  
//   //onSubmitEditing
//   //키보드의 "완료" 버튼 클릭시 호출되는 TextInput의 함수로서,
//   //이 함수에서 Context에 데이터를 저장하고
//   //TodoInput컴포넌트를 숨기도록 hideTodoInput 함수 호출
//   return (
//     <Input
//       autoFocus={true}
//       autoCapitalize="none"
//       autoCorrect={false}
//       placeholder="할일을 입력하세요!"
//       returnKeyType="done"
//       onSubmitEditing={({ nativeEvent }) => {
//         addTodoList(nativeEvent.text);
//         hideTodoInput();
//       }}
//     />
//   );
// };
// export default TextInput;
