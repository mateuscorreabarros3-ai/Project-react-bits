import ElectricBorder from './components/ElectricBorder/ElectricBorder'
function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<ElectricBorder
color="#5227FF"
speed={1}
chaos={0.5}
borderRadius={16}
>
<div style={{ padding: '40px', fontSize: '24px', color: 'white' }}>
Efeito Electric Border
</div>
</ElectricBorder>
</div>
)
}
export default App