import React from 'react'
import "./Blog.css";
function About() {
  return (
//     <div class="upper-container">
//     <div className="blog-container">
//       <h5 className="heading2"> What is BlockChain?</h5>
//       <img  className="img-responsive" src="https://cdn.pixabay.com/photo/2022/02/12/18/19/monkey-7009603__480.jpg"  height="250" width="240" alt="monkey-7009603"/>
//       <section className="section1"> 
//       <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
// One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
// A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain.</p>
//       </section>
//       <section className="section2"> section2</section>
//     </div>
//     </div>

<>
<section className="section0">
  <h2 className="blockchain">What is BlockChain</h2>
</section>


<section className="section1"> 

<img  className="img-responsive" src="https://cdn.pixabay.com/photo/2022/02/12/18/19/monkey-7009603__480.jpg"  height="250" width="240" alt="monkey-7009603"/>
     <p className="first"> A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
One key difference between a typical database and a blockchain is how the data is structured.</p>
<div className="gap"></div>
<img  className="img-responsive1" src="https://cdn.pixabay.com/photo/2018/08/30/12/24/bitcoin-3642042__340.png"  height="250" width="240" alt="monkey-7009603"/>
    <p className="second">A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain</p>

</section>
<section className="section3">
<span className="keys-head">KEY TAKEAWAYS</span>
 <div className="takeaway">
<p>
◾   Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography.
</p>
<p>
◾   As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block, which makes the data chained together in chronological order.
</p>

<p>◾   Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions.</p>
 <p>◾  In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
 </p>
 </div>
</section>
</>
  )
}

export default About;