import { azurirajSkor } from '../api/korisnikService';

export const useSkor = () =>
{

    const azurirajSkor1 = async (imeKorisnika, skor) =>
    {

        try
        {
            await  azurirajSkor(imeKorisnika, skor);
            console.log(`Podesen je novi skor ${skor} za korisnika ${imeKorisnika}`)

        }
        catch (error)
        {
            console.log(error)
        }


    }

    return {azurirajSkor1}


} 