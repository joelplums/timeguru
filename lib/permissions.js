ownsDocument = function(userId, doc) {
  return doc && doc.author === userId;
}