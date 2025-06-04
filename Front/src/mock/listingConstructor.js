class Listing {
  constructor({ id, owner, requestedSkill, offeredSkill, description, privateStatus, designatedTo }) {
    this.id = id;
    this.owner = owner;
    this.requestedSkill = requestedSkill;
    this.offeredSkill = offeredSkill;
    this.description = description;
    this.private = privateStatus || false;
    this.designatedTo = designatedTo || null;
    this.created = new Date();
  }
}