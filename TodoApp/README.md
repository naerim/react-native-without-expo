# TodoApp

## ✅ Platform.OS

1. Platform.OS === 'ios' ? 'padding' : undefined
2. Platform.select({ios: 'padding' , android: undefined})
3. Platform.select({ios: 'padding'})  
   3가지 모두 동일한 표현!

## ✅ TextInput

onSubmitEditing : Enter를 눌렀을 때 호출되는 함수

## ✅ Alert

parameter: `제목`, `내용`, `버튼 배열`, `옵션 객체`

#### 버튼 배열

버튼 배열에 넣는 객채에는 text로 버튼의 이름을 지정할 수 있고, onPress를 통해 버튼이 눌렸을 때 호출할 함수를 설정할 수 있음  
style은 cancel, default, destructive 값을 설정할 수 있는데 ios만 작동함

#### 옵션 객체

cancelable을 통해 안드로이드에서 Alert 박스 바깥 영역을 터치하거나 Back 버튼을 눌렀을 때 Alert이 닫히도록 설정할 수 있음. onDismiss는 Alert이 닫힐 때 호출되는 함수.
