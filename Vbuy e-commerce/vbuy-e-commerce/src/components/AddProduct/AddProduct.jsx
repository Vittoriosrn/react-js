import styles from './AddProduct.module.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthProvider'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const AddProduct = () => {
    const [prodName, setProdName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [specifications, setSpecifications] = useState("")
    const [packageContent, setPackageContent] = useState("")
    const [guarantee, setGuarantee] = useState("")
    const [prodWeight, setProdWeight] = useState("")
    const [prodImages, setProdImages] = useState([])
    const [formError, setFormError] = useState("")

    const {insertDocument, response} = useInsertDocument("products")
 
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({prodImages})

        setFormError("")

        // validade image url
        try {
            for(let i = 0; i < prodImages.length; i++){
                new URL(prodImages[i])
            }
        } catch (error) {
            setFormError("A imagem precisa ser uma URL")
            return
        }

        if (formError) return;

        insertDocument({
            prodName,
            price,
            brand,
            specifications,
            packageContent,
            guarantee,
            prodWeight,
            prodImages
        })

        navigate("/")
    }

    // criar array
    const handleInputChange = (e, index) => {
        const newImages = [...prodImages] // Cria uma cópia do array atual
        newImages[index] = e.target.value // Atualiza o valor do link no índice correspondente
        setProdImages(newImages) // Atualiza o estado com o novo array de links
    }
  return (
    <div className={styles.addProduct}>
        <form onSubmit={handleSubmit}>
            <h2>Novo Produto</h2>
            <input 
                type='text'
                name='name'
                placeholder='Nome do Produto' 
                required
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
            />
            <input 
                type='number'
                name='price'
                placeholder='Valor' 
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <select onChange={(e) => setBrand(e.target.value)} required>
                <option>Selecione a marca</option>
                <option>Redragon</option>
                <option>AMD</option>
                <option>Nvidea</option>
            </select>
            <textarea 
                name='specifications'
                value={specifications}
                required
                placeholder='Especificações' 
                onChange={(e) => setSpecifications(e.target.value)}
            />
            <textarea 
                name='package-content'
                value={packageContent}
                required
                placeholder='Conteudo da embalagem' 
                onChange={(e) => setPackageContent(e.target.value)}
            />
            <select onChange={(e) => setGuarantee(e.target.value)} required>
                <option>Selecione a garantia</option>
                <option>12 meses</option>
                <option>6 meses</option>
                <option>3 meses</option>
            </select>
            <input 
                name='weight'
                value={prodWeight}
                required
                placeholder='Peso' 
                onChange={(e) => setProdWeight(e.target.value)}
            />
            <div>
                <h2>Imagens</h2>
                <input required onChange={(e) => handleInputChange(e, 0)} placeholder='Link 1'/>
                <input required onChange={(e) => handleInputChange(e, 1)} placeholder='Link 2'/>
                <input required onChange={(e) => handleInputChange(e, 2)} placeholder='Link 3'/>
                <input required onChange={(e) => handleInputChange(e, 3)} placeholder='Link 4'/>
            </div>
           {!response.loading && <button className='btn'>Adicionar</button>}
           {response.loading && <button className='btn' disabled>Adicionar</button>}
           {formError && <p className='error'>{formError}</p>}
        </form>
    </div>
  )
}

export default AddProduct