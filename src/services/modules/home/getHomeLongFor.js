import xxRequest from "@/services"

export const getHomeLongFor = () => {
    return xxRequest.get({
        url: "/home/longfor"
    })
}
