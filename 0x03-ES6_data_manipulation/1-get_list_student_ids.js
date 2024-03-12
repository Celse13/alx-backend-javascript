function  getListStudentIds(list) {
    if (!Array.isArray(list) || list.length === 0) return [];  
    return list.map(student => student.id);
}
