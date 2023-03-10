import { useState } from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/Emozioni.module.css'
import tristezza from '../../public/images/emozioni/tristezza.png'
import rabbia from '../../public/images/emozioni/rabbia.png'
import felicita from '../../public/images/emozioni/felicita.png'

interface Emotion {
	backgroundColor: string
	name: string
	content: string
}

const imageTristezza = (
	<div
		style={{
			left: '40%',
			bottom: '22%',
			width: '70%',
			height: '70%',
		}}
		className={styles.imgContainer}
	>
		<Image
			src={tristezza}
			alt='tristezza'
			fill={true}
			placeholder='blur'
			className={styles.emotionImg}
			style={{
				objectFit: 'contain',
			}}
		/>
	</div>
)

const imageRabbia = (
	<div
		style={{
			left: '30%',
			bottom: '18%',
			width: '80%',
			height: '80%',
		}}
		className={styles.imgContainer}
	>
		<Image
			src={rabbia}
			alt='rabbia'
			fill={true}
			placeholder='blur'
			style={{
				objectFit: 'contain',
			}}
		/>
	</div>
)

const imageFelicita = (
	<div
		style={{
			left: '32%',
			bottom: '22%',
			width: '80%',
			height: '80%',
		}}
		className={styles.imgContainer}
	>
		<Image
			src={felicita}
			alt='felicita'
			fill={true}
			placeholder='blur'
			className={styles.emotionImg}
			style={{
				objectFit: 'contain',
			}}
		/>
	</div>
)

const EMOTIONS: Emotion[] = [
	{
		backgroundColor: '#f5ae9e',
		name: 'la tristezza',
		content: `<p>
		Non esiste una vita senza tristezza, è quasi impossibile non
		<br />
		sperimentarlaalmeno una volta, ed è giusto provarla.
		<br />
		<strong>
			Lei ci aiuta a crescere, a maturare, a capire quando è
			<br />
			il momento di prenderci un momento per noi.
		</strong>
		Lei ci aiuta a
		<br />
		rimanere con i piedi per terra, perché, siamo sinceri avita non è
		per
		<br />
		niente una passeggiata. Nella vita
		<i>
			è difficile che non si sperimenti
			<br />
			la tristezza.
		</i>
	</p>
	<p>
		Facendo un esempio banale: da bambini anche quando si chiedeva di
		<br />
		mangiare un gelato, e i nostri genitori, o i nostri nonni ci
		rispondevano di
		<br />
		no, diventavamo tristi, arrabbiati perché noi in quel momento
		<br />
		desideravamo mangiarlo, lo volevamo a tutti i costi. Vero?
		<br />
		Anche solo il fatto di amare qualcuno, di poterlo perdere, ci rende
		tristi.
		<br />
		La tristezza non è mai assoluta o sempre presente o sempre assente,
		<br />
		arriva a tratti, a tratti fa male, a tratti menomale. Da piccoli si
		tendeva a
		<br />
		dimostrare di più la nostra tristezza, magari piangendo, urlando,
		facendo
		<br />i capricci, e
		<strong>
			<u>
				<i>
					da piccoli hanno sempre tentato di distrarci, di farci
					<br />
					pensare a delle cose belle che tristi, a farci ridere.
				</i>
			</u>
		</strong>
	</p>`,
	},
	{
		backgroundColor: '#f1c9c0',
		name: 'la rabbia',
		content: `<p>
		La rabbia è uno di quelle emozioni che ci insegnano a guardarla
		<br />
    come una cosa sbagliata. Io dico che non lo sia, è giusto provarle
		<br />
    tutte, No? Sono quel che sono. Okay, la rabbia su alcune persone
		<br />
    sfocia in ira, ma..
	</p>
	<p>
		<strong>
			ehi non si puó essere perfetti!
		</strong>
	</p>
	<p>
		Parlando seriamente,
		<u>
			l’ira è una brutta cosa da gestire lo so, è tosta.
		</u>
		<br />
		Come ho letto in un libro
		<strong>
			è una specie di DRAGO dormiente
			<br />
			la rabbia,
		</strong>
		che vive nella profondità dentro di noi, ma quando esce
		<br />
		e non ne abbiamo l’assoluto controllo, eccola la che arriva l’ira,
		<br />
		quella che ti fa dire e fare cose che non vorresti.
	</p>
	<p>
		La rabbia è un pugno in pieno stomaco, ci fa dire cose che magari
		<br />
		non pensiamo realmente, ci fare azioni che non vorremmo compiere,
		<br />
		la rabbia è una delle emozioni più forti che difficilmente non
		<br />
		proveremmo mai. La rabbia è un fuoco che tutti noi abbiamo, chi più
		<br />
		alimentato, chi più tenue, affievolito. Ma mai va sottovalutato.
	</p>`,
	},
	{
		backgroundColor: '#f5ae9e',
		name: 'la felicità',
		content: `<p>
		Sappiamo tutti che la vita è come una specie di altalena, delle
		<br />
    volte abbiamo dei picchi di felicità, delle volte è troppo lenta..
	</p>
	<p>
		<strong>
		Ma poi dove sarebbe il divertimento se fosse sempre e
		<br />
		solo così? Diventerebbe monotona.
		</strong>
	</p>
	<p>
		La vita ci prende a calci in faccia ogni giorno, ci mette davanti
		<br />
		davvero tanti ostacoli, e le emozioni negative sono quelle che la
		<br />
		maggior parte del tempo prendonoil sopravvento.
	</p>
	<p>
		Perciò sta a noi prendere in mano la situazione e cambiarla,
		<br />
		rovesciare una situazione del cavolo e renderla quantomeno
		<br />
		sopportabile.
		<strong>
			La felicità assoluta non esiste! Scordati di essere
			<br />
			ogni giorno felice..
		</strong>
	  Okay detta così è sicuramente sbagliato, ci
		<br />
		saranno sicuramente periodi in cui sarai felice eh però è una
		<br />
		specie di altalena.. Oscilliamo da un’emozione all’altra, ed è
		<br />
		giusto così.
	</p>`,
	},
]

export default function Emozioni() {
	const [emotionIndex, setEmotionIndex] = useState(0)
	const emotion = EMOTIONS[emotionIndex]

	const handlePrevious = () => {
		if (emotionIndex > 0)
			setEmotionIndex((prevEmotionIndex) => prevEmotionIndex - 1)
	}

	const handleNext = () => {
		if (emotionIndex < EMOTIONS.length - 1)
			setEmotionIndex((prevEmotionIndex) => prevEmotionIndex + 1)
	}

	return (
		<main
			className={styles.container}
			style={{ backgroundColor: emotion.backgroundColor }}
		>
			<Navbar />
			{emotionIndex > 0 ? (
				<button className={styles.emotionPrevious} onClick={handlePrevious}>
					&#8592;
				</button>
			) : null}
			{emotionIndex < EMOTIONS.length - 1 ? (
				<button className={styles.emotionNext} onClick={handleNext}>
					&#8594;
				</button>
			) : null}
			<section className={styles.section}>
				{emotion.name === 'la tristezza' ? imageTristezza : null}
				{emotion.name === 'la rabbia' ? imageRabbia : null}
				{emotion.name === 'la felicità' ? imageFelicita : null}
				<h1>
					Ti spiego
					<br />
					cos&apos;é
				</h1>
				<div className={styles.emotion}>{emotion.name}</div>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: emotion.content }}
				/>
			</section>
			<Footer />
		</main>
	)
}
