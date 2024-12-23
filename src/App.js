import imageReact from './assets/images/devcampreact.png';

const gDevcampReact = {
  title: 'Chào mừng đến với Devcamp React',
  image: imageReact,
  benefits: ['Blazing Fast', 'Seo Friendly', 'Reusability', 'Easy Testing', 'Dom Virtuality', 'Efficient Debugging'],
  studyingStudents: 20,
  totalStudents: 100,
  countPercentStudyingStudents: function () {
    return this.studyingStudents / this.totalStudents *100;
  }
}

const handleButtonClick = ()=>{
  console.log("Button clicked");
}

const handleInputChange =(e)=>{
  console.log(e.target.value);
}

function App() {
  return (
    <div>
      <h1>{gDevcampReact.title}</h1>
      <img src={gDevcampReact.image} alt={gDevcampReact.title} width={1000}/>
      <p>Tỉ lệ sinh viên đang theo học: {gDevcampReact.countPercentStudyingStudents()}%</p>
      <p>{gDevcampReact.countPercentStudyingStudents() >15 ? "Sinh viên đăng kí học nhiều" : "Sinh viên đăng kí học ít"}</p>
      <ul>
        {
          gDevcampReact.benefits.map((benefits, index) => <li key={index}>{benefits}</li>)
        }
      </ul>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
