

namespace Validactions {


    const validateText = (text: string): boolean => {
        return text.length > 3
    }

    const validateDate = (myDate: Date): boolean => {
        return isNaN(myDate.valueOf())
    }


}